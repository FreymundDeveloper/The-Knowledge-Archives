<template>
    <footer class="footer">
        <span>Copyright <strong>FreymundDeveloper</strong> © 2024 - Thanks to <strong>Cod3r</strong>!</span>
    </footer>
</template>

<script>
export default {
    name: 'FooterMain'
}
</script>

<style>
    .footer {
        grid-area: footer;
        background-color: #ddd;
        color: #333;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px;
    }
</style>