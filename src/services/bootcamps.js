import _ from 'lodash';

class BootcampDetails {
  async getAllBootcamps(url = 'http://localhost:5000/api/v1/bootcamps') {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application.json',
      },
    });
    if (!response.ok) {
      throw new error(
        `BootcampDetails getAllBootcamps failed, status ${response.status}`
      );
    }
  }

  async getBootcamp(id) {
    const url = `http://localhost:5000/api/v1/bootcamp/${id}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjOGExZDViMDE5MGIyMTQzNjBkYzAzMSIsImlhdCI6MTYwMTcwNzUyNCwiZXhwIjoxNjA0Mjk5NTI0fQ.KhueQfutcWLwKPmOBOdy3Ac1llDrz9-4Xmti0wUuNNo`,
      },
    });
    if (!response.ok) {
      throw new Error(
        `BootcampDetails getAllBootcamps failed, HTTP status ${response.status}`
      );
    }
    //return apires

    const apiResponse = await response.json();

    if (response.status === 400) {
      throw apiResponse.errors;
    }
  }
}

export default new BootcampDetails();
