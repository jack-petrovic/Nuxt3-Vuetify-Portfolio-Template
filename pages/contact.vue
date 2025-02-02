<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <h1 class="text-h2 mb-6">Contact Us</h1>
        <p class="text-h5 mb-8">
          Get in touch with our team
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Send us a message</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="submitForm">
              <v-text-field
                  v-model="form.name"
                  label="Name"
                  required
              ></v-text-field>

              <v-text-field
                  v-model="form.email"
                  label="Email"
                  type="email"
                  required
              ></v-text-field>

              <v-textarea
                  v-model="form.message"
                  label="Message"
                  required
              ></v-textarea>

              <v-btn
                  color="primary"
                  type="submit"
                  block
              >
                Send Message
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Contact Information</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon icon="mdi-email"></v-icon>
                </template>
                <v-list-item-title>contact@clientcontracttech.com</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <template v-slot:prepend>
                  <v-icon icon="mdi-phone"></v-icon>
                </template>
                <v-list-item-title>+1 416 547 6638</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <template v-slot:prepend>
                  <v-icon icon="mdi-map-marker"></v-icon>
                </template>
                <v-list-item-title>24 Avenue Road, Toronto, Ontario, Canada</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  // Handle form submission
  console.log('Form submitted:', form.value)
}
</script>