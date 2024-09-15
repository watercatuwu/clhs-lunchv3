import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  const id = getRouterParam(event, 'id')

  const { data, error } = await client
    .from('users')
    .select('balance')
    .eq('id', id)
    .single()

    if (error) {
        return error
    }
    return data
})