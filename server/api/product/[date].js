import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)


async function fetchProduct(date) {
    const { data, error } = await supabase
    .from('menus')
    .select()
    .eq('date', date)
    .single()

    if (error) {
        return error
    }
    return data
};

export default defineEventHandler(event => {
    const date = getRouterParam(event, 'date');
    return fetchProduct(date)
});