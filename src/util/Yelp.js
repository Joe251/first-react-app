const apiKey = 'iM-05IIcRfvDyLFn5Jsk7BP3o8NY8Ew3j2QE6guI_ZrnuNxBHM8wXkzyJqq_dlqEjC7Fh0cdS6uysy7aLlmKSwS3ifVFUXDF4BMNqxxTYNa_iQ6oTlN71zaEjYUaX3Yx'

const Yelp = {}

export function search(term, location, sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    { 
        headers: {
          Authorization: `Bearer ${apiKey}` 
        }
    }).then(response => {
        return response.json();
    }).then(jsonResponse => {
        console.log(jsonResponse);
        if (jsonResponse.businesses) {
            return jsonResponse.businesses.map(business => {
                return {
                    id:business.id,
                    imageSrc:business.image_url,
                    name:business.name,
                    address:business.location,
                    city:business.location.city,
                    state:business.location.state,
                    zipCode:business.location.zip_code,
                    category:business.categories,
                    rating:business.rating,
                    reviewCount:business.review_count
                }
            });
        }
    });
}

