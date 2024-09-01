<template>
    <div class="container mx-auto mb-4">
        <div class="flex md:flex-row flex-col items-center md:justify-between">
            <NuxtLink to="/">
                <MazBtn class="mb-4">
                    <template #left-icon>
                        <Icon name="material-symbols:arrow-left-alt-rounded" size="1.5rem" />
                    </template>
                    返回首頁
                </MazBtn>
            </NuxtLink>
            <a href="https://hackmd.io/@watercatuwu/lunchv3" target="_blank" rel="noopener noreferrer">
                <MazBtn color="info" class="mb-4">
                    <template #left-icon>
                        <Icon name="material-symbols:menu-book" size="1.5rem" />
                    </template>
                    更多教學&常見問題(Hackmd)
                </MazBtn>
            </a>
        </div>

        <!--desktop-->
        <!--ARCADE EMBED START-->
        <div v-if="!isMd" style="position: relative; padding-bottom: calc(49.947916666666664% + 41px); height: 0; width: 100%;">
            <iframe
            src="https://demo.arcade.software/IfbDK1GdmpDetrJEycO9?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
            title="商店"
            frameborder="0"
            loading="lazy"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
            allow="clipboard-write"
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; color-scheme: light;"
            ></iframe>
        </div>
        <!--ARCADE EMBED END-->

        <!--phone-->
        <!--ARCADE EMBED START-->
        <div v-else style="position: relative; padding-bottom: calc(222.25063938618925% + 41px); height: 0; width: 100%;">
            <iframe
            src="https://demo.arcade.software/k2vtyuXFzXUIWfn08Id3?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
            title="商店"
            frameborder="0"
            loading="lazy"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
            allow="clipboard-write"
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; color-scheme: light;"
            ></iframe>
        </div>
        <!--ARCADE EMBED END-->
    </div>
</template>

<script setup>
useHead({
  title: '教學',
  meta: [
    { name: 'description', content: 'A simple tutorial' }
  ]
})
const isMd = useMediaQuery('(max-width: 960px)')
</script>