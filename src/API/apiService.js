
const API_KEY = '21940379-165654ee27b0a15257d8ffa36';
export const apiService = async (search, page = 1) => {
 try{
   let response  = await fetch(`https://pixabay.com/api/?
   &orientation="horizontal
   &image_type=photo
   &q=${search}
   &page=${page}
   &per_page=12
   &key=${API_KEY}
`)
   const data = await response.json()
   if (!response.ok) {
     throw new Error(data.message || 'Something wrong')
   }

   return data
 }catch (e) {
    console.error(e)
 }

}

