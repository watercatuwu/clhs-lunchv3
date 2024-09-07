import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  const date = getRouterParam(event, 'date');

  const { data, error } = await client
    .from('menus')
    .select()
    .eq('date', date)
    .single()

    if (error) {
        return error
    }
    return data
})