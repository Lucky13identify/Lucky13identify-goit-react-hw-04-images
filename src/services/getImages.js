import axios from 'axios';

export async function getImages(request, page) {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${request}&page=${page}&key=33641597-af0dded98b621629426cb08e5&image_type=photo&orientation=horizontal&per_page=12`
    );

    return await response.data;
  } catch (error) {
    console.log(error);
  }
}
