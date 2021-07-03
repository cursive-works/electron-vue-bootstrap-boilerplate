<template>
    <b-table striped hover :items="items"></b-table>
</template>

<script>
export default {
    data() {
        return {
            items: appsProvider
        }
    }
}

function appsProvider(ctx, callback) {
    window.api.send('get_example_items')
    window.api.receive('example_items', (items) => {
        callback(items)
    })
    return null
}

</script>
