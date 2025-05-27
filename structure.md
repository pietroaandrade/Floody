flood-aware/
│
├── arduino/
│   └── sensor_node.ino
│
├── backend/
│   ├── app/
│   │   ├── main.py (FastAPI app)
│   │   ├── database.py
│   │   ├── models.py
│   │   ├── routes.py
│   │   └── ai_engine.py (GPT & AI logic)
│   └── requirements.txt
│
├── frontend/
│   └── react-app/
│       └── src/
│           ├── App.jsx
│           ├── components/
│           │   └── Map.js
│           └── services/
│               └── api.js
│
├── data/
│   └── sensors.csv (initial location mapping, optional)
│
└── README.md