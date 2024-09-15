export default defineNuxtRouteMiddleware(async(to, _from) => {
    const user = useSupabaseUser()
    const supabase = useSupabaseClient()

    const { data:role } = await supabase.from('users').select('role').eq('id', user.value.id).single()
    if (role.role !== 'admin') {
      return abortNavigation({
        statusCode: 403,
        statusMessage: `權限不足，需要管理員權限:(`
       });
    };
})