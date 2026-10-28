// Profile supplied by Tao Jiang; publication links and OpenAI citation verified 2026-10-28.
window.profile = {
  "introduction": {
    "zh": "我在四川大学数学学院获得本科学历，目前在中国科学院软件研究所计算机科学国家重点实验室攻读博士学位。",
    "en": "I received my bachelor’s degree from the School of Mathematics at Sichuan University. I am currently pursuing a Ph.D. at the State Key Laboratory of Computer Science, Institute of Software, Chinese Academy of Sciences."
  },
  "research": [
    {
      "title": {
        "zh": "SAT 与组合优化",
        "en": "SAT and combinatorial optimization"
      },
      "description": {
        "zh": "研究 SAT 算法的运行时间、局部搜索及其与完备搜索的差异，也做整数二次规划等组合优化问题。",
        "en": "Running-time analysis of SAT algorithms, local search and its differences from complete search, and combinatorial optimization problems such as integer quadratic programming."
      }
    },
    {
      "title": {
        "zh": "Agent 递归自我改进（RSI）",
        "en": "Agent recursive self-improvement (RSI)"
      },
      "description": {
        "zh": "目前在华为诺亚方舟实验室做 Agent RSI。相关工作包括大模型 SAT 推理评测和 Lean 4 证明优化。",
        "en": "Currently working on agent RSI at Huawei Noah’s Ark Lab. Related projects include SAT reasoning evaluation for LLMs and Lean 4 proof optimization."
      }
    }
  ],
  "contacts": [
    {
      "label": "jiangt@ios.ac.cn",
      "url": "mailto:jiangt@ios.ac.cn"
    },
    {
      "label": {
        "zh": "简历",
        "en": "CV"
      },
      "url": "assets/tao-jiang-cv.pdf"
    },
    {
      "label": "GitHub",
      "url": "https://github.com/jiangxioabai"
    }
  ],
  "publications": [
    {
      "title": "A Better Analysis For PPSZ For 3-SAT",
      "authors": "Tao Jiang, Shaowei Cai",
      "venue": {
        "zh": "arXiv 预印本",
        "en": "arXiv preprint"
      },
      "year": "2026",
      "description": {
        "zh": "改进原始 PPSZ 算法的分析，得到一般 3-SAT 的随机算法时间界 O*(1.307031578ⁿ)，无需修改算法。",
        "en": "An improved analysis of the original PPSZ algorithm gives a randomized running-time bound of O*(1.307031578ⁿ) for general 3-SAT, without modifying the algorithm."
      },
      "links": [
        [
          "arXiv",
          "https://arxiv.org/abs/2607.10697"
        ],
        [
          "PDF",
          "https://arxiv.org/pdf/2607.10697"
        ],
        [
          "Code",
          "https://github.com/jiangxioabai/A-Better-Analysis-For-PPSZ"
        ]
      ],
      "featured": true
    },
    {
      "title": "Beyond Clause Count: A Study of Proof-Relevant Difficulty in LLM SAT Reasoning",
      "authors": "Tao Jiang, Shaowei Cai",
      "year": "2026",
      "venue": {
        "zh": "ICLR 2026 研讨会 · 口头报告 · 杰出论文奖",
        "en": "ICLR 2026 Workshop · Oral · Outstanding Paper Award"
      },
      "description": {
        "zh": "比较大模型在子句数相近、证明难度不同的 SAT 实例上的表现。",
        "en": "Compares LLM performance on SAT instances with similar clause counts but different proof difficulty."
      },
      "links": []
    },
    {
      "title": "Local Search for Integer Quadratic Programming",
      "authors": "Xiang He, Peng Lin, Tao Jiang, Shaowei Cai",
      "year": "2026",
      "venue": {
        "zh": "INFORMS Journal on Computing",
        "en": "INFORMS Journal on Computing"
      },
      "description": {
        "zh": "为整数二次规划设计局部搜索方法，刷新 QPLIB / MINLPLIB 中 6 个公开实例的已知最好解。",
        "en": "A local-search method for integer quadratic programming, establishing six new best-known solutions on open QPLIB / MINLPLIB instances."
      },
      "links": [
        [
          "Paper",
          "https://doi.org/10.1287/ijoc.2025.1178"
        ],
        [
          "Code",
          "https://github.com/INFORMSJoC/2025.1178"
        ]
      ]
    },
    {
      "title": "Separation between WalkSAT and DPLL",
      "authors": "Tao Jiang, Shaowei Cai, Ziqun Li, Jiabao Lin, Yijia Chen",
      "year": "2026",
      "venue": {
        "zh": "Theoretical Computer Science",
        "en": "Theoretical Computer Science"
      },
      "description": {
        "zh": "在可满足的 Tseitin 公式上，建立 WalkSAT 与带单位传播及重启的随机分支 DPLL 模型之间的理论分离。",
        "en": "Separates WalkSAT from random-branching DPLL with unit propagation and restarts on satisfiable Tseitin formulas."
      },
      "links": [
        [
          "Paper",
          "https://www.sciencedirect.com/science/article/pii/S030439752600486X"
        ]
      ]
    },
    {
      "title": "Polynomial-Time Singular Witnesses for Non-SNS Sign Patterns",
      "authors": "Tao Jiang, Minbo Gao, Shaowei Cai",
      "year": "",
      "venue": {
        "zh": "IJTCS–FAW",
        "en": "IJTCS–FAW"
      },
      "links": []
    },
    {
      "title": "Expected Runtime Bounds for WalkSAT and GSAT on Tseitin CNFs",
      "authors": "Tao Jiang, Shiteng Chen, Ziqun Li, Shaowei Cai",
      "year": "",
      "venue": {
        "zh": "IJTCS–FAW",
        "en": "IJTCS–FAW"
      },
      "links": []
    }
  ],
  "manuscripts": [
    {
      "title": "Theory and Scalable Algorithms for Overlapping Clustering Objectives",
      "authors": {
        "zh": "Tao Jiang（第一作者）",
        "en": "Tao Jiang (first author)"
      },
      "venue": {
        "zh": "AAAI 2027 · 在投",
        "en": "AAAI 2027 · Under review"
      }
    },
    {
      "title": "Exact Softmax Attention Has the Rectangular Matrix-Multiplication Exponent in Extended Arithmetic Circuits",
      "authors": {
        "zh": "Tao Jiang, Minbo Gao",
        "en": "Tao Jiang, Minbo Gao"
      },
      "venue": {
        "zh": "ICLR 2027 · 在投",
        "en": "ICLR 2027 · Under review"
      }
    }
  ],
  "projects": [
    {
      "title": {
        "zh": "大模型驱动的 Lean 4 证明优化",
        "en": "LLM-guided Lean 4 proof optimization"
      },
      "status": {
        "zh": "在研",
        "en": "In progress"
      },
      "description": {
        "zh": "用大模型改写 Lean 4 证明，并通过编译验证正确性，比较证明长度、验证时间和跨版本兼容性。",
        "en": "Using LLMs to rewrite Lean 4 proofs, checking correctness by compilation, and comparing proof length, verification time, and compatibility across Lean versions."
      }
    },
    {
      "title": {
        "zh": "LLM SAT 推理评测与难度分析",
        "en": "LLM SAT reasoning benchmarks"
      },
      "status": {
        "zh": "研究项目",
        "en": "Research project"
      },
      "description": {
        "zh": "构造难度可控的 SAT 实例，评测 GPT、Claude、Qwen、DeepSeek 等模型，分析证明难度与回答准确率的关系。",
        "en": "Constructed SAT instances with controlled difficulty to evaluate GPT, Claude, Qwen, and DeepSeek, and studied the relationship between proof difficulty and answer accuracy."
      }
    },
    {
      "title": {
        "zh": "LS-IQCQP：整数二次规划局部搜索",
        "en": "LS-IQCQP: local search for IQP"
      },
      "status": {
        "zh": "合作研究",
        "en": "Collaborative research"
      },
      "description": {
        "zh": "参与可行性修复算子的设计、推导和实现。代码与实验数据已公开。",
        "en": "Contributed to the design, derivation, and implementation of the feasibility-repair operator. Code and experimental data are available."
      },
      "url": "https://github.com/INFORMSJoC/2025.1178"
    }
  ]
};
