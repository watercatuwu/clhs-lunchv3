import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_KEY)

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