import request from '../utils/request';

export const getData = async filters => {
  try {
    const response = await request.get('/', {
      params: filters,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    return {
      data: [],
      pageInfo: {
        hasNextPage: false,
      },
    };
  }
};
