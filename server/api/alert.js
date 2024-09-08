import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event)

  const { data, error } = await client
    .from('announcements')
    .select()
    .eq('alert', true)
    .single()

    if (error) {
        return error
    }
    return data
})