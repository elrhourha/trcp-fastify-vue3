<script setup lang="ts">
import { useMutation, useQuery } from '@tanstack/vue-query'
import { userApi } from '@/api/user.api.ts'
import { ref, unref } from 'vue'
import type { User, CreateUserInput } from '@trcp-fastify-vue3/bff'

const { data, isLoading } = useQuery({
  queryKey: ['user', 1],
  queryFn: () => userApi.user.getUser.query('1'),
})

const createUser = useMutation<void, Error, CreateUserInput>({
  mutationFn: (user: User) => userApi.user.createUser.mutate(user).then(),
  onSuccess: (_, user: User) => {
    users.value.push(user)
  },
  onSettled: () => {
    firstName.value = ''
    age.value = 18
  },
})

const firstName = ref('')
const age = ref(18)

const onSubmit = () => {
  createUser.mutate({ name: unref(firstName), age: unref(age) })
}

const users = ref<User[]>([])
</script>

<template>
  <section>
    <div v-if="isLoading">Loading...</div>
    <div v-else>{{ data?.id }}</div>
    <form @submit.prevent="onSubmit">
      <input v-model="firstName" type="text" placeholder="firstname" />
      <input v-model="age" type="number" placeholder="age" />
      <input type="submit" value="Submit" />
    </form>
    <div>
      <ul>
        <li v-for="user in users" :key="user.name">{{ user.name }} - {{ user.age }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped></style>
