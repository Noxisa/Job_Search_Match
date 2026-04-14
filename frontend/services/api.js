const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

export async function matchResumeToJob(resume, jobDescription) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/match`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ resume, jobDescription }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error matching resume to job:', error);
    throw error;
  }
}