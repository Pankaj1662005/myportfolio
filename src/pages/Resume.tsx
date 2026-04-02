import React from "react";

export default function Resume() {
  return (
    <section className="mb-16 mt-6">
      <h2 className="text-3xl font-extrabold tracking-tight mb-3">Resume</h2>
      <div className="w-14 h-1 bg-[#e1a27a] mb-6 rounded-full" />
      <div className="grid md:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Education</h3>
          <div className="flex flex-col gap-6">
            <div className="bg-[#232325] rounded-2xl p-5 shadow-md">
              <span className="block text-[#e1a27a] font-semibold mb-2">B.Tech, Computer Engineering (2022-2026)</span>
              <h4 className="text-lg font-bold">Thapar Institute of Engineering and Technology</h4>
              <div className="text-[#b3b3b3] mb-2">CGPA: 7.8</div>
            </div>
            <div className="bg-[#232325] rounded-2xl p-5 shadow-md">
              <span className="block text-[#e1a27a] font-semibold mb-2">12th (CBSE)</span>
              <h4 className="text-lg font-bold">Aaron Public School , Jind</h4>
              <div className="text-[#b3b3b3] mb-2">Score: 90.8%</div>
            </div>
            <div className="bg-[#232325] rounded-2xl p-5 shadow-md">
              <span className="block text-[#e1a27a] font-semibold mb-2">10th (CBSE)</span>
              <h4 className="text-lg font-bold">Delhi Public School, Jind</h4>
              <div className="text-[#b3b3b3] mb-2">Score: 90.6%</div>
            </div>
          </div>
        </div>
        {/* Projects & Experience */}
        <div>
          <h3 className="text-2xl font-bold mb-4 mt-8">Certifications</h3>
          <div className="flex flex-col gap-6">
            <div className="bg-[#232325] rounded-2xl p-5 shadow-md">
              <span className="block text-[#e1a27a] font-semibold mb-1">Data Science: Foundations using R Specialization (Coursera, 2024)</span>
              <ul className="list-disc list-inside ml-2 text-[#cccccc] text-sm mt-2 space-y-1">
                <li>Completed all 5 courses.</li>
              </ul>
              <ul className="list-disc list-inside ml-2 text-[#cccccc] text-sm mt-2 space-y-1">
                <li> Skills - R Programming, Data Cleaning, Data Analysis, Data Visualization, Exploratory Data Analysis, Statistical Analysis, Statistical Programming, Statistical Reporting, Data Integration, Data Sharing, Version Control, GitHub, Knitr, Ggplot2, Reproducible Research</li>
              </ul>
            </div>

            <div className="bg-[#232325] rounded-2xl p-5 shadow-md">
              <span className="block text-[#e1a27a] font-semibold mb-1">Natural Language Processing Specialization (Coursera, 2025)</span>
              <ul className="list-disc list-inside ml-2 text-[#cccccc] text-sm mt-2 space-y-1">
                <li>Completed all 4 courses.</li>
              </ul>
              <ul className="list-disc list-inside ml-2 text-[#cccccc] text-sm mt-2 space-y-1">
                <li> Skills - Sentiment Analysis, Text Classification, Machine Translation, Autocorrect, Autocomplete, Part-of-Speech Tagging, Text Summarization, Question Answering, Word Embeddings, RNNs, LSTMs, GRUs, Attention Mechanisms, TensorFlow, Keras, PyTorch, NLP, Machine Learning, Deep Learning, Feature Engineering, Text Mining, Supervised Learning</li>
              </ul>
            </div>
            <div className="bg-[#232325] rounded-2xl p-5 shadow-md">
              <span className="block text-[#e1a27a] font-semibold mb-1">Mastering Data Structures & Algorithms using C and C++ (Udemy)</span>
              <ul className="list-disc list-inside ml-2 text-[#cccccc] text-sm mt-2 space-y-1">
                <li> Data Structures, Algorithms, C Programming, C++ Programming, Recursion, Arrays, Linked Lists, Stacks, Queues, Trees, Binary Search Trees, AVL Trees, Graphs, Hashing, Sorting Algorithms, Analytical Thinking, Problem Solving</li>
              </ul>
            </div>
            <div className="bg-[#232325] rounded-2xl p-5 shadow-md">
              <span className="block text-[#e1a27a] font-semibold mb-1"> Alpha Placement Course(Apna College)</span>
              <ul className="list-disc list-inside ml-2 text-[#cccccc] text-sm mt-2 space-y-1">
                <li> Java Programming, Object-Oriented Programming (OOP), Advanced Java Concepts, Java Collections Framework, Dynamic Programming, Graph Algorithms, Tries, Segment Trees, System Design Basics, Resume & Interview Preparation</li>
              </ul>
            </div>

              <div className="bg-[#232325] rounded-2xl p-5 shadow-md">
              <span className="block text-[#e1a27a] font-semibold mb-1">25+ guided projects completed</span>
              <ul className="list-disc list-inside ml-2 text-[#cccccc] text-sm mt-2 space-y-1">
                <li>20+ are from coursera.</li>
              </ul>
              <ul className="list-disc list-inside ml-2 text-[#cccccc] text-sm mt-2 space-y-1">
                <li> Skills - Python Programming, Flask Web Development, TensorFlow, Keras, Deep Learning, Image Classification, BERT, Sentiment Analysis, NLP, R Programming, Data Visualization (Seaborn, Power BI), Exploratory Data Analysis, Web Scraping, Facebook Prophet, CRM (HubSpot, Salesforce), Google Sheets, Google Analytics, Custom Reporting,ML</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
