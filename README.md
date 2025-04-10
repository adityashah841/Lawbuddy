# LAWBUDDY

## Introduction
**LAWBUDDY** is an advanced legal platform designed to empower individuals with knowledge about their rights and legalities under Indian laws. Leveraging cutting-edge technology, the platform offers a range of features, including a Know-Your-Rights chatbot, document retrieval, legal insights, and more.
### Home Page
![image](https://github.com/Devang-Shah-49/LegalAI/assets/80088008/42d10112-0886-4dea-8d0c-b8e3ca05f032)

### Client connects to Advocate
![image](https://github.com/Devang-Shah-49/LegalAI/assets/80088008/66653c2e-d772-40c3-b340-eb9359a73f63)




### Personal Assistant
![image](https://github.com/Devang-Shah-49/LegalAI/assets/55392536/3af6c099-7aca-4ea0-8d0c-dd1da257378f)



### Webscrapping Latest News
![image](https://github.com/Devang-Shah-49/LegalAI/assets/55392536/6255c4d5-25e4-4e7e-a245-28980b386130)



### Feature Page 
![image](https://github.com/Devang-Shah-49/LegalAI/assets/55392536/ae27f383-5b99-4b35-a0e7-04b2564651a8)



### Lawbot
![image](https://github.com/Devang-Shah-49/LegalAI/assets/55392536/e50fccdd-e4bb-46e2-9eff-747df7875908)




### Document Summarization/QNA
![image](https://github.com/Devang-Shah-49/LegalAI/assets/55392536/dea9a579-92d2-4d8f-8529-d254b1ba3f5d)



### Narrative Legalism
![image](https://github.com/Devang-Shah-49/LegalAI/assets/55392536/3ffcf4e6-0dde-4b76-9a59-dc37361339de)



### Document Drafting
![image](https://github.com/Devang-Shah-49/LegalAI/assets/55392536/156b6fc8-2c65-4ce3-bcfc-7ef5a84b2148)



### Advocaate Connect Page
![image](https://github.com/Devang-Shah-49/LegalAI/assets/55392536/0346a969-3e71-4ea2-b361-2324f4be4c6e)



### Admin Dashboard
![image](https://github.com/Devang-Shah-49/LegalAI/assets/55392536/23d83b4e-f774-456d-9b36-9ebaabca8395)

![image](https://github.com/Devang-Shah-49/LegalAI/assets/55392536/7a8cdb7e-b151-4daf-b97c-0b72c1817c73)




## Features

### Know-Your-Rights Chatbot/Lawbot
- **Retrieval Augmented Generation Pipeline**: Provides users with specific legal documents and insights based on their queries.


### Document Summarization
- **LayBuddy's Document QNA**: Focuses on the importance of documents, offering insights into each point to consider while creating and reviewing legal documents. This feature helps in nullifying human errors during the document preparation process.

### Narrative Legalism
- **Story-Like Explanations**: Simplifies complex legal concepts through engaging narrative-style content, making legal learning more accessible and engaging for Law Students.

### Multilingual Support
- **Automated Language Detection**: Adapts to users' preferred languages for enhanced accessibility.
- **Text-To-Speech Feature**: Converts text content into speech, catering to users with diverse needs.


### Additional Features
- **Legal Document Drafting**: Enables users to draft essential legal documents efficiently.
- **Advo-Connect**: Offers recommendations for lawyers based on user requirements.
- **Low-Code Approach**: Facilitates easy updates to the vector database, managed by administrators, ensuring the platform remains current and relevant.



## Getting Started
To get started with LawBuddy, follow these steps after cloning the repository:

### Setting Up the Client-Side
1. **Navigate to the Client Directory**:
   ```bash
   cd client
   ```

2. **Install Dependencies and Run the Project**:
   ```bash
   npm install
   npm run dev
   ```

### Setting Up the Server-Side
1. **Open a New Terminal Window**.

2. **Navigate to the Server Directory**:
   ```bash
   cd server
   ```

3. **Create and Activate a Virtual Environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use: .\venv\Scripts\activate
   ```

4. **Install Required Python Packages**:
   ```bash
   pip install -r requirements.txt
   ```

5. **Configure Environment Variables**:
   Create a `.env` file in the server directory and define the following environment variables:
   ```env
   SECRET_KEY=YourSecretKeyHere
   OPENAI_API_KEY=YourOpenAIAPIKeyHere
   HUGGING_FACE_API_KEY=YourHuggingFaceAPIKeyHere
   PINECONE_API_KEY_FOR_LAWBOT=YourPineconeAPIKeyHere
   PINECONE_API_KEY_FOR_NARRATIVE=YourPineconeAPIKeyHere
   PINECONE_ENV=YourPineconeEnvironment
   ```

6. **Run the Flask Server**:
   ```bash
   python app.py
   ```

### Running ChainLit for Chatbots
1. **Open new Terminal and Navigate to the Document Drafting Chatbot Directory**:
   ```bash
   cd chatbots/document_drafting
   ```

2. **Run ChainLit for Document Drafting**:
   ```bash
   chainlit run -w ./document_drafting.py --port 8001
   ```

3. **Open new Terminal and Navigate to the Lawbot Chatbot Directory**:
   ```bash
   cd chatbots/lawbot
   ```

4. **Run ChainLit for Lawbot**:
   ```bash
   chainlit run -w ./lawbot.py --port 8002
   ```
   
5. **Open new Terminal and Navigate to the Document Summary Chatbot Directory**:
   ```bash
   cd chatbots/document_sum
   ```
   
6. **Run ChainLit for Document Summarization**:
   ```bash
   chainlit run -w ./document_sum.py --port 8003
   ```
7. **Open new Terminal and Navigate to the Narrative Legalism Chatbot Directory**:
   ```bash
   cd chatbots/narrative_legalism
   ```

8. **Run ChainLit for Narrative Legalism**:
   ```bash
   chainlit run -w ./narrative_legalism.py --port 8004
   ```


## Technology Stack
- **Frontend**: React + Vite + TypeScript
- **Backend**: Flask, ChainLit
- **Database**: SQLite
- **APIs**: OpenAI, Pinecone, Hugging Face

## Contributors
- Aditya Shah - adityashah841
- Devang Shah - Devang-Shah-49
- Hastansh Pandit - Hastansh12
- Meet Vasa - Meet3456
