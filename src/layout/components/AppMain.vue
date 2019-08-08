<template>
    <transition>
        <router-view :key="$route.path"/>
    </transition>
</template>
