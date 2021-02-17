class BootcampDetails {
  async getAllBootcamps(url = 'http://localhost:5000/api/v1/bootcamps') {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application.json',
      },
    });
    if (!response.ok) {
      throw new Error(
        `BootcampDetails getAllBootcamps failed, status ${response.status}`
      );
    }

    const apiResponse = await response.json();

    if (response.status === 400) {
      throw apiResponse.errors;
    }
    return apiResponse;
  }

  async getBootcamp(id) {
    const url = `http://localhost:5000/api/v1/bootcamps/${id}`;
    const response = await fetch(url, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(
        `BootcampDetails getBootcamp failed, HTTP status ${response.status}`
      );
    }
    //return apiresponse

    const apiResponse = await response.json();

    if (response.status === 400) {
      throw apiResponse.errors;
    }
    return apiResponse;
  }

  async addReview({ id, payload, token }) {
    const url = `http://localhost:5000/api/v1/bootcamps/${id}/reviews`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error(
        `BootcampDetails addReview failed, HTTP status ${response.status}`
      );
    }

    //return api response
    const apiResponse = await response.json();

    if (!apiResponse.success) {
      throw apiResponse.error;
    }

    return apiResponse.success;
  }
}

export default new BootcampDetails();
