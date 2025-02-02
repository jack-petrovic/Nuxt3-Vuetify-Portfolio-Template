<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <h1 class="text-h2 mb-6">About Customer Centric Tech</h1>
        <p class="text-h5 mb-8">
          We are dedicated to delivering innovative technology solutions that transform businesses.
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <v-card class="mb-4">
          <v-card-title>Our Mission</v-card-title>
          <v-card-text>
            To empower businesses with cutting-edge technology solutions that drive growth and success.
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="mb-4">
          <v-card-title>Our Vision</v-card-title>
          <v-card-text>
            To be the leading technology partner for businesses seeking innovative solutions.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-timeline>
          <v-timeline-item>
            <template v-slot:opposite>
              2018
            </template>
            <v-card>
              <v-card-title>Company Founded</v-card-title>
              <v-card-text>
                Customer Centric Tech was established with a vision to transform businesses.
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <v-timeline-item>
            <template v-slot:opposite>
              2021
            </template>
            <v-card>
              <v-card-title>Rapid Growth</v-card-title>
              <v-card-text>
                Expanded our team and client base significantly.
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <v-timeline-item>
            <template v-slot:opposite>
              2023
            </template>
            <v-card>
              <v-card-title>Innovation Award</v-card-title>
              <v-card-text>
                Recognized for our innovative solutions and customer service.
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>