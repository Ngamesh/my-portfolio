import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { validateEmailDeliverability } from './server/emailValidation.js'

function emailValidationDevApi(apiKey) {
  return {
    name: 'email-validation-dev-api',
    configureServer(server) {
      server.middlewares.use('/api/validate-email', (request, response, next) => {
        if (request.method !== 'POST') {
          next()
          return
        }

        let body = ''
        request.on('data', chunk => {
          body += chunk
        })
        request.on('end', async () => {
          response.setHeader('Content-Type', 'application/json')

          try {
            const { email } = JSON.parse(body)
            const result = await validateEmailDeliverability(email?.trim(), apiKey)
            response.statusCode = 200
            response.end(JSON.stringify(result))
          } catch (error) {
            console.error('Email validation failed:', error)
            response.statusCode = 503
            response.end(JSON.stringify({
              valid: false,
              message: 'Email verification is temporarily unavailable',
            }))
          }
        })
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), emailValidationDevApi(env.ABSTRACT_API_KEY)],
  }
})
