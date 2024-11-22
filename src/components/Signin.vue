<template>
	<div class="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
		<Card class="w-full max-w-md bg-white shadow-lg card dark:bg-gray-800 dark:border-gray-700">
			<template #title>
				<div class="text-xl font-semibold text-center text-gray-800 title dark:text-gray-200">로그인</div>
			</template>
			<template #content>
				<Form :resolver @submit="onFormSubmit" class="flex flex-col w-full gap-4">
					<!-- Email Field -->
					<FormField v-slot="$field" as="section" name="username" initialValue="" class="flex flex-col gap-2">
						<InputText 
							type="text" 
							placeholder="Email" 
							v-model="email" 
							class="w-full px-4 py-2 mt-3 text-gray-800 border border-gray-300 rounded input-class dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
						/>
						<Message 
							v-if="$field?.invalid" 
							severity="error" 
							size="small" 
							variant="simple" 
							class="text-sm text-red-600 dark:text-red-400"
						>
							{{ $field.error?.message }}
						</Message>
					</FormField>
					
					<!-- Password Field -->
					<FormField v-slot="$field" as="section" name="password" initialValue="" class="flex flex-col gap-2">
						<div class="relative">
							<InputText 
								:type="isPasswordVisible ? 'text' : 'password'"
								placeholder="Password" 
								v-model="pw" 
								class="w-full px-4 py-2 text-gray-800 border border-gray-300 rounded input-class dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
							/>
							<span 
								class="absolute inset-y-0 flex items-center text-gray-500 cursor-pointer right-3 dark:text-gray-300"
								@click="togglePasswordVisibility"
							>
								<i class="pi pi-eye" v-if="!isPasswordVisible"></i>
								<i class="pi pi-eye-slash" v-else></i>
							</span>
						</div>
						<Message 
							v-if="$field?.invalid" 
							severity="error" 
							size="small" 
							variant="simple" 
							class="text-sm text-red-600 dark:text-red-400"
						>
							{{ $field.error?.message }}
						</Message>
					</FormField>
					
					<!-- Submit Button -->
					<Button 
						class="w-full py-2 mt-1 text-white bg-green-600 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
						type="submit" 
						severity="secondary" 
						label="로그인" 
					/>
				</Form>
				<div class="mt-3 text-center">
					<div @click="signUpRouter()" class="text-green-600 cursor-pointer dark:text-green-400 hover:underline">회원가입</div>
				</div>
			</template>
		</Card>
	</div>
</template>

<script setup lang="ts">
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
import { useToast } from "primevue/usetoast";

import { userList } from "@/data/userList.json"
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();
const router = useRouter()
const toast = useToast();

const email = ref("")
const pw = ref("")

const isPasswordVisible = ref(false);


const togglePasswordVisibility = () => {
	isPasswordVisible.value = !isPasswordVisible.value
}


const resolver =  zodResolver(
	z.object({
		username: z.string().email('올바른 이메일 형식이어야 합니다.'),
		password: z.string().min(10, { message: '비밀번호는 최소 10자 이상이어야 합니다.' }) // 최소 10자
    .regex(/[A-Z]/, { message: '비밀번호에는 최소 하나의 대문자가 포함되어야 합니다.' }) // 대문자 1개 이상
    .regex(/[^a-zA-Z0-9]/, { message: '비밀번호에는 최소 하나의 특수문자가 포함되어야 합니다.' }) // 특수문자 1개 이상
	})
)


const onFormSubmit = async ({ valid }: { valid: boolean }) => {
	// resolver -> 해당 조건 통과하면 form쪽이 감지해서 -> valid true
	if (valid) {
		const res = userList.filter(val => val.email === email.value && val.pw === pw.value)

		if(res.length > 0) {
			router.push({ name : "DashBoard", params : res as unknown as Record<string, any> });
			toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
		} else {
			toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
		}
	}
};

// 회원가입 입동
const signUpRouter = () => {
	router.push("SignUp");

}
</script>

<style lang="scss" scoped>

</style>