import { Flex, Button, Stack } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';
import { SubmitHandler, useForm } from 'react-hook-form';

interface SignInFormData {
  email: string;
  password: string;
}

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm();

  const handleSignIn: SubmitHandler<SignInFormData> = (values) => {
    console.log(values)
  }

  return (
  <Flex
    w='100vw'
    h='100vh'
    align="center"
    justify="center"
  >
    <Flex
      as="form"
      width="100%"
      maxWidth={360}
      bg="gray.800"
      p="8"
      borderRadius={8}
      flexDir="column"
      onSubmit={handleSubmit(handleSignIn)}
    >
      <Stack spacing="4">
        <Input type="email" name="email" label="E-mail" {...register('email')} />
        <Input type="password" name="password" label="Senha" {...register('password')} />
      </Stack>

      <Button isLoading={formState.isSubmitting} type="submit" mt="6" colorScheme="pink" size="lg">Entrar</Button>
    </Flex>
   </Flex>
  )
}
