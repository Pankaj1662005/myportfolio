import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = mount.clientWidth;
    const H = mount.clientHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.inset = "0";
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 1000);
    camera.position.set(0, 0.4, 3.2);
    camera.lookAt(0, 0, 0);

    // ── Stars ─────────────────────────────────────────────
    const starGeo = new THREE.BufferGeometry();
    const starCount = 3000;
    const starPos = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);
    for (let i = 0; i < starCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 80 + Math.random() * 120;
      starPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPos[i * 3 + 2] = r * Math.cos(phi);
      starSizes[i] = Math.random() * 1.8 + 0.4;
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute("size", new THREE.BufferAttribute(starSizes, 1));
    const starMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader: `
        attribute float size;
        uniform float uTime;
        varying float vAlpha;
        void main() {
          vAlpha = 0.4 + 0.6 * sin(uTime * 1.2 + position.x * 0.05);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        varying float vAlpha;
        void main() {
          float d = length(gl_PointCoord - 0.5) * 2.0;
          float a = smoothstep(1.0, 0.0, d) * vAlpha;
          gl_FragColor = vec4(0.85, 0.90, 1.0, a);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    scene.add(new THREE.Points(starGeo, starMat));

    // ── Procedural Earth texture ───────────────────────────
    function makeEarthTexture(size: number) {
      const c = document.createElement("canvas");
      c.width = c.height = size;
      const ctx = c.getContext("2d")!;
      const ocean = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 1.4);
      ocean.addColorStop(0, "#1a4a7a");
      ocean.addColorStop(0.5, "#0d2d52");
      ocean.addColorStop(1, "#071828");
      ctx.fillStyle = ocean;
      ctx.fillRect(0, 0, size, size);

      const lands = [
        { x: 0.15, y: 0.25, rx: 0.13, ry: 0.16 },
        { x: 0.22, y: 0.52, rx: 0.07, ry: 0.14 },
        { x: 0.48, y: 0.28, rx: 0.08, ry: 0.10 },
        { x: 0.49, y: 0.45, rx: 0.07, ry: 0.16 },
        { x: 0.65, y: 0.22, rx: 0.18, ry: 0.14 },
        { x: 0.75, y: 0.57, rx: 0.07, ry: 0.06 },
        { x: 0.5,  y: 0.90, rx: 0.30, ry: 0.06 },
      ];
      lands.forEach((l) => {
        const grd = ctx.createRadialGradient(l.x * size, l.y * size, 0, l.x * size, l.y * size, Math.max(l.rx, l.ry) * size);
        grd.addColorStop(0, "#3a7a3a");
        grd.addColorStop(0.5, "#2d6b2d");
        grd.addColorStop(0.85, "#4a8a2a");
        grd.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.ellipse(l.x * size, l.y * size, l.rx * size, l.ry * size, 0, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.fillStyle = "rgba(255,220,100,0.7)";
      const cityZones = [
        { cx: 0.18, cy: 0.3, r: 0.1 },
        { cx: 0.49, cy: 0.3, r: 0.08 },
        { cx: 0.67, cy: 0.25, r: 0.12 },
        { cx: 0.75, cy: 0.58, r: 0.04 },
      ];
      for (let i = 0; i < 600; i++) {
        const z = cityZones[Math.floor(Math.random() * cityZones.length)];
        const px = (z.cx + (Math.random() - 0.5) * z.r * 2) * size;
        const py = (z.cy + (Math.random() - 0.5) * z.r * 2) * size;
        const pr = Math.random() * 1.5 + 0.3;
        ctx.beginPath();
        ctx.arc(px, py, pr, 0, Math.PI * 2);
        ctx.fill();
      }

      const iceCap1 = ctx.createLinearGradient(0, 0, 0, size * 0.12);
      iceCap1.addColorStop(0, "rgba(220,235,255,0.9)");
      iceCap1.addColorStop(1, "rgba(180,210,255,0)");
      ctx.fillStyle = iceCap1;
      ctx.fillRect(0, 0, size, size * 0.12);

      const iceCap2 = ctx.createLinearGradient(0, size * 0.88, 0, size);
      iceCap2.addColorStop(0, "rgba(200,220,255,0)");
      iceCap2.addColorStop(1, "rgba(220,235,255,0.85)");
      ctx.fillStyle = iceCap2;
      ctx.fillRect(0, size * 0.88, size, size * 0.12);

      return new THREE.CanvasTexture(c);
    }

    // ── Earth ──────────────────────────────────────────────
    const earthTex = makeEarthTexture(1024);
    const lightDir = new THREE.Vector3(2.5, 0.8, 2.0).normalize();
    const earthGeo = new THREE.SphereGeometry(1, 64, 64);
    const earthMat = new THREE.ShaderMaterial({
      uniforms: { uTexture: { value: earthTex }, uLightDir: { value: lightDir }, uTime: { value: 0 } },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uTexture;
        uniform vec3 uLightDir;
        varying vec2 vUv;
        varying vec3 vNormal;
        void main() {
          vec4 tex = texture2D(uTexture, vUv);
          float diff = max(dot(vNormal, uLightDir), 0.0);
          float ambient = 0.12;
          float light = ambient + diff * 0.88;
          float nightBlend = smoothstep(0.0, -0.35, dot(vNormal, uLightDir));
          vec3 nightColor = tex.rgb * vec3(1.6, 1.3, 0.5) * 1.8 * nightBlend;
          vec3 dayColor = tex.rgb * light;
          vec3 col = dayColor + nightColor * (1.0 - diff);
          vec3 viewDir = normalize(vec3(0.0, 0.0, 1.0));
          vec3 halfV = normalize(uLightDir + viewDir);
          float spec = pow(max(dot(vNormal, halfV), 0.0), 48.0) * 0.35;
          float isOcean = 1.0 - smoothstep(0.1, 0.3, (tex.r - tex.g));
          col += vec3(0.5, 0.7, 1.0) * spec * isOcean;
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });
    const earth = new THREE.Mesh(earthGeo, earthMat);
    scene.add(earth);

    // ── Atmosphere ─────────────────────────────────────────
    const atmGeo = new THREE.SphereGeometry(1.06, 64, 64);
    const atmMat = new THREE.ShaderMaterial({
      uniforms: { uLightDir: { value: lightDir } },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewPos;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vViewPos = normalize((modelViewMatrix * vec4(position, 1.0)).xyz);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uLightDir;
        varying vec3 vNormal;
        varying vec3 vViewPos;
        void main() {
          float rim = 1.0 - abs(dot(vNormal, -vViewPos));
          rim = pow(rim, 3.5);
          float sunFacing = max(dot(vNormal, uLightDir), 0.0);
          vec3 atmColor = mix(vec3(0.1, 0.3, 0.9), vec3(0.3, 0.6, 1.0), sunFacing);
          gl_FragColor = vec4(atmColor, rim * 0.65);
        }
      `,
      transparent: true,
      side: THREE.FrontSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    scene.add(new THREE.Mesh(atmGeo, atmMat));

    // ── Outer halo ─────────────────────────────────────────
    const haloGeo = new THREE.SphereGeometry(1.18, 64, 64);
    const haloMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewPos;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vViewPos = normalize((modelViewMatrix * vec4(position, 1.0)).xyz);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        varying vec3 vViewPos;
        void main() {
          float rim = 1.0 - abs(dot(vNormal, -vViewPos));
          rim = pow(rim, 5.0);
          gl_FragColor = vec4(0.2, 0.5, 1.0, rim * 0.28);
        }
      `,
      transparent: true,
      side: THREE.BackSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    scene.add(new THREE.Mesh(haloGeo, haloMat));

    // ── Clouds ─────────────────────────────────────────────
    function makeCloudTex(size: number) {
      const c = document.createElement("canvas");
      c.width = c.height = size;
      const ctx = c.getContext("2d")!;
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, size, size);
      for (let i = 0; i < 120; i++) {
        const cx = Math.random() * size, cy = Math.random() * size;
        const rx = 20 + Math.random() * 80, ry = 8 + Math.random() * 30;
        const angle = Math.random() * Math.PI;
        const alpha = 0.15 + Math.random() * 0.4;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(angle);
        const g = ctx.createRadialGradient(0, 0, 0, 0, 0, rx);
        g.addColorStop(0, `rgba(255,255,255,${alpha})`);
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g;
        ctx.scale(1, ry / rx);
        ctx.beginPath();
        ctx.arc(0, 0, rx, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      return new THREE.CanvasTexture(c);
    }
    const cloudGeo = new THREE.SphereGeometry(1.012, 64, 64);
    const cloudMat = new THREE.MeshPhongMaterial({
      map: makeCloudTex(512),
      alphaMap: makeCloudTex(512),
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
    });
    const clouds = new THREE.Mesh(cloudGeo, cloudMat);
    scene.add(clouds);

    // ── Lights ─────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0x111122, 0.5));
    const sun = new THREE.DirectionalLight(0xfff5e0, 1.8);
    sun.position.set(5, 2, 4);
    scene.add(sun);

    // ── Aurora ring ────────────────────────────────────────
    const auroraGeo = new THREE.TorusGeometry(1.15, 0.035, 16, 160);
    const auroraMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `
        uniform float uTime;
        varying vec2 vUv;
        void main() {
          float wave = sin(vUv.x * 25.0 + uTime * 1.8) * 0.5 + 0.5;
          float pulse = sin(uTime * 0.7 + vUv.x * 12.0) * 0.5 + 0.5;
          vec3 col = mix(vec3(0.0, 0.8, 0.5), vec3(0.4, 0.2, 1.0), wave);
          col = mix(col, vec3(0.0, 1.0, 0.8), pulse * 0.4);
          gl_FragColor = vec4(col, wave * pulse * 0.6);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });
    const aurora = new THREE.Mesh(auroraGeo, auroraMat);
    aurora.rotation.x = Math.PI / 2;
    aurora.position.y = 0.82;
    aurora.scale.set(1, 1, 0.18);
    scene.add(aurora);

    // ── Animation ──────────────────────────────────────────
    let t = 0;
    let raf: number;
    function animate() {
      raf = requestAnimationFrame(animate);
      t += 0.005;
      earth.rotation.y = t * 0.18;
      clouds.rotation.y = t * 0.22;
      aurora.rotation.z = t * 0.05;
      earthMat.uniforms.uTime.value = t;
      starMat.uniforms.uTime.value = t;
      auroraMat.uniforms.uTime.value = t;
      camera.position.y = 0.4 + Math.sin(t * 0.15) * 0.05;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    }
    animate();

    // ── Resize ─────────────────────────────────────────────
    function onResize() {
      const w = mount.clientWidth, h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        background: "#040810",
      }}
    />
  );
}