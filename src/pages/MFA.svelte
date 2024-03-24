<script>
    import { getToken } from '../store/auth.js'

    import MFAForm from '../lib/forms/MFAForm.svelte'
    import LoginRequired from '../lib/LoginRequired.svelte'
</script>

<LoginRequired />

<h1>Multi-Factor Authentication (MFA)</h1>
<MFAForm />
