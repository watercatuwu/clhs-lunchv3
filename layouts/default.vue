<template>
<div class="bg-zinc-900 min-h-screen flex flex-col">
    <Alert msg="測試訊息" icon="material-symbols:warning" />
    <Navbar />
    <slot />
    <Footer />
</div>
</template>