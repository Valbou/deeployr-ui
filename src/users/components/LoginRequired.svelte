<script>
    import { onMount } from 'svelte'
    import { getToken } from '../store/auth.js'

    onMount(() => {
        let token = getToken()
        if (!token || token.length < 20) {
            window.location.replace('/login')
        }
    })
</script>
