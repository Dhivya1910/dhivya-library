<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <h1 class="text-center">User Information Form</h1>
                <form @submit.prevent="submitForm">
                    <div class="row mb-3">
                        <div class="col-6">
                            <label for="username" class="form-label">Username:</label>
                            <input type="text" id="username" 
                             @blur="validateName(true)"
                             @input="validateName(false)"
                             name="username" class="form-control" v-model="formData.username">
                            <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
                        </div>
                        <div class="col-6">
                            <label for="password" class="form-label">Password:</label>
                            <input type="password" id="password" 
                            @blur="validatePassword(true)"
                            @input="validatePassword(false)"
                            class="form-control" v-model="formData.password"/>
                            <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-6">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="isAustralian" v-model="formData.isAustralian">
                                <label class="form-check-label" for="isAustralian">Australian Resident?</label>
                            </div>
                        </div>
                        <div class="col-6">
                            <label for="gender" class="form-label">Gender</label>
                            <select id="gender" class="form-select" v-model="formData.gender" @blur="validateGender(true)">
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="other">Other</option>
                            </select>
                            <div v-if="errors.gender" class="text-danger">{{ errors.gender }}</div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12">
                            <label for="reason" class="form-label">Reason for joining:</label>
                            <textarea id="reason" rows="3" class="form-control" v-model="formData.reason"></textarea>
                        </div>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary me-2">Submit</button>
                        <button type="button" class="btn btn-secondary" @click="clearForm">Clear</button>
                    </div>
                </form>
                <!-- Add a custom class to create spacing between buttons and table -->
                <DataTable class="datatable custom-datatable mt-4" :value="submittedCards">
                    <Column field="username" header="Username"></Column>
                    <Column field="password" header="Password"></Column>
                    <Column field="isAustralian" header="Resident"></Column>
                    <Column field="gender" header="Gender"></Column>
                    <Column field="reason" header="Reason"></Column>
                </DataTable>
            </div>
        </div>   
    </div>
</template>

<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const formData = ref({
    username: '',
    password: '',
    isAustralian: false,
    reason: '',
    gender: ''
});

const submittedCards = ref([]);

const submitForm = () => {
    validateName(true);
    validatePassword(true);
    validateGender(true);
    if (!errors.value.username && !errors.value.password && !errors.value.gender) {
        submittedCards.value.push({ ...formData.value });
        clearForm();
    }
};

const clearForm = () => {
    formData.value = {
        username: '',
        password: '',
        isAustralian: false,
        reason: '',
        gender: ''
    };
};

const errors = ref({
    username: null,
    password: null,
    gender: null
});

const validateName = (blur) => {
    if (formData.value.username.length < 3) {
        if (blur) errors.value.username = "Name must at least be 3 characters";
    } else {
        errors.value.username = null;
    }
};

const validatePassword = (blur) => {
    const password = formData.value.password;
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    if (password.length < minLength) {
        if (blur) errors.value.password = `Password must be at least ${minLength} characters long.`;
    } else if (!hasUppercase) {
        if (blur) errors.value.password = "Password must contain at least one upper case letter.";
    } else if (!hasLowercase) {
        if (blur) errors.value.password = 'Password must contain at least one lower case letter.';
    } else if (!hasNumber) {
        if (blur) errors.value.password = 'Password must contain at least one number.';
    } else if (!hasSpecialChar) {
        if (blur) errors.value.password = 'Password must contain at least one special character.';
    } else {
        errors.value.password = null;
    }
};

const validateGender = (blur) => {
    if (!formData.value.gender) {
        if (blur) errors.value.gender = "This is a mandatory field";
    } else {
        errors.value.gender = null;
    }
};
</script>

<style scoped>

.card {
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.card-header {
    background-color: #275FDA;
    color: white;
    padding: 10px;
    border-radius: 10px 10px 0 0;
}
.list-group-item {
    padding: 10px;
}

.card {
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.card-header {
    background-color: #275FDA;
    color: white;
    padding: 10px;
    border-radius: 10px 10px 0 0;
}
.list-group-item {
    padding: 10px;
}

:deep(.custom-datatable .p-datatable-thead > tr > th) {
    font-weight: bold; /* Make header text bold */
    border-bottom: 2px solid #ccc !important; /* Gray line for header */
}

:deep(.custom-datatable .p-datatable-tbody > tr > td) {
    border-bottom: 1px solid #ccc !important; /* Gray line for each row */
}

</style>