import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  const id = getRouterParam(event, 'id');

  const { data, error } = await client
    .from('users')
    .select(`id,number,balance`)
    .eq('class', id)
    .order('balance', { ascending: false })

    if (error) {
        return { statusCode: 500, message: 'Error fetching orders', error };
    }
    return { statusCode: 200, message: 'Success', data };
})