export const fetchCountriesData = async () => {
    try {
      const response = await import('/JSON/countries.json'); // Update the URL as needed  
      return response.default; // Return the fetched data
    } catch (error) {
        console.error('Error fetching properties:', error);
        return [];
      }
}
 