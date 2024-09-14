export default defineNuxtRouteMiddleware((to, _from) => {
    const session = useSupabaseSession()

    if (!session.value) {
      return abortNavigation({
        statusCode: 403,
        statusMessage: '權限不足，請登入後再試:('
    });
    }
})