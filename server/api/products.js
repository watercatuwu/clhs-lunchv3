import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_KEY)


async function fetchProduct() {
    const { data, error } = await supabase
    .from('menus')
    .select()

    if (error) {
        return error
    }
    return data
};

export default defineEventHandler(event => {
    return fetchProduct()
});