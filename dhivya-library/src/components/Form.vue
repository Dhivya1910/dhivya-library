<template>
    <div class = "form">
    <h1>User Information Form / Credentials</h1>
    <form>
        <label for = "username"> Username: </label><br>
        <input type = "text" id = "username" name="username"><br>

        <label for = "password">Password: </label><br>
        <input type = "password" id = "p1" name="p1"><br>

        <label for = "isAustralian">Australian Resident? </label><br>
        <input type = "checkbox" id = "isAustralian" name="isAustralian"><br>

        <label for = "reason">Reason fro joining: </label><br>
        <textarea id = "reason" name = "reason" rows="3"></textarea><br>

        <label for = "gender">Gender: </label><br>
        <select id = "gender">
            <option value = "Female">Female</option>
            <option value = "Male">Male</option>
            <option value="other">Other</option>
        </select>

    </form>
    </div>
</template>

<script setup>
// Our logic will go here
</script>

<!-- <style scoped>
// Our logic will go here
</style> -->