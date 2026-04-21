# JobFit

JobFit is a React + FastAPI app for generating a tailored resume draft and cover letter from a PDF resume and a job description.

The frontend collects the inputs. The backend validates the PDF, sends the request to Gemini, and returns the generated drafts.

## Repositories

Frontend:

```text
https://github.com/aldask/JobFit_FE
```

Backend:

```text
https://github.com/aldask/JobFit_BE
```

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- FastAPI
- Google Gemini API

## Run Locally

You need two terminals: one for the backend and one for the frontend.

### 1. Clone The Repositories

```powershell
git clone https://github.com/aldask/JobFit_FE.git
git clone https://github.com/aldask/JobFit_BE.git
```

### 2. Start The Backend

```powershell
cd JobFit_BE
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
copy .env.example .env
```

Generate a Gemini API key:

```text
https://aistudio.google.com/app/apikey
```

Add it to `JobFit_BE/.env`:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Start the backend:

```powershell
python -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
```

Backend runs at:

```text
http://localhost:8000
```

### 3. Start The Frontend

Open a second terminal:

```powershell
cd JobFit_FE
npm install
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

## Backend URL

The frontend backend URL is defined in:

```text
src/api/routes.ts
```

For local development, use:

```ts
const API_BASE_URL = "http://localhost:8000";
```

For the hosted backend, use:

```ts
const API_BASE_URL = "https://jobfit-be.onrender.com";
```
