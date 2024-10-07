import axios from 'axios';

// Base URL for SubCategoryController API
const BASE_URL = 'http://localhost:8080/store/subcategory';

const subCategoryService = {
  // Create a new subcategory
  createSubCategory(subCategory) {
    console.log('Subcategory being sent to backend:', subCategory);
    return axios.post(`${BASE_URL}/create`, subCategory)
      .then(response => response)
      .catch(error => {
        console.error('Error creating subcategory:', error);
        throw error;
      });
  },

  // Read subcategory by ID
  getSubCategoryById(id) {
    return axios.get(`${BASE_URL}/${id}`)
      .then(response => response)
      .catch(error => {
        console.error(`Error fetching subcategory with ID ${id}:`, error);
        throw error;
      });
  },

  // Update existing subcategory
  updateSubCategory(id, subCategory) {
    return axios.put(`${BASE_URL}/update/${id}`, subCategory)
      .then(response => response)
      .catch(error => {
        console.error(`Error updating subcategory with ID ${id}:`, error);
        throw error;
      });
  },

  // Delete subcategory by ID
  deleteSubCategory(id) {
    return axios.delete(`${BASE_URL}/delete/${id}`)
      .then(response => response)
      .catch(error => {
        console.error(`Error deleting subcategory with ID ${id}:`, error.response || error.message || error);
        throw error;
      });
  },

  // Get all subcategories
  getAllSubCategories() {
    return axios.get(`${BASE_URL}/getAll`)
      .then(response => response)
      .catch(error => {
        console.error('Error fetching all subcategories:', error);
        throw error;
      });
  },


  // Get subcategories by product ID
  getSubCategoriesByProduct(id) {
    return axios.get(`${BASE_URL}/getByProduct/${id}`)
      .then(response => response.data) // Assuming you want the data directly
      .catch(error => {
        console.error(`Error fetching subcategories for product ID ${id}:`, error);
        throw error;
      });
  },

  // Get subcategories by category ID
  getSubCategoriesByCategory(id) {
    return axios.get(`${BASE_URL}/getByCategory/${id}`)
      .then(response => response.data) // Assuming you want the data directly
      .catch(error => {
        console.error(`Error fetching subcategories for category ID ${id}:`, error);
        throw error;
      });
  },
};

export default subCategoryService;
