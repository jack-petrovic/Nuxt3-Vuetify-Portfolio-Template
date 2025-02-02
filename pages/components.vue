<template>
  <v-container>
    <h1 class="text-h3 mb-6">Component Showcase</h1>

    <!-- Buttons Section -->
    <section class="mb-8">
      <h2 class="text-h4 mb-4">Buttons</h2>
      <v-row>
        <v-col cols="12" md="6">
          <v-btn color="primary" class="mr-2">Primary</v-btn>
          <v-btn color="secondary" class="mr-2">Secondary</v-btn>
          <v-btn color="accent">Accent</v-btn>
        </v-col>
        <v-col cols="12" md="6">
          <v-btn variant="outlined" color="primary" class="mr-2">Outlined</v-btn>
          <v-btn variant="text" color="primary">Text</v-btn>
        </v-col>
      </v-row>
    </section>

    <!-- Cards Section -->
    <section class="mb-8">
      <h2 class="text-h4 mb-4">Cards</h2>
      <v-row>
        <v-col cols="12" md="4">
          <v-card>
            <v-img
                src="https://picsum.photos/300/200"
                height="200"
                cover
            ></v-img>
            <v-card-title>Card Title</v-card-title>
            <v-card-text>
              This is a sample card with an image and some text content.
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary">Action</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </section>

    <!-- Form Controls -->
    <section class="mb-8">
      <h2 class="text-h4 mb-4">Form Controls</h2>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
              label="Text Input"
              placeholder="Enter text"
          ></v-text-field>
          <v-select
              label="Select"
              :items="['Option 1', 'Option 2', 'Option 3']"
          ></v-select>
        </v-col>
        <v-col cols="12" md="6">
          <v-checkbox label="Checkbox"></v-checkbox>
          <v-radio-group>
            <v-radio label="Radio 1" value="1"></v-radio>
            <v-radio label="Radio 2" value="2"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
    </section>

    <!-- Data Display -->
    <section class="mb-8">
      <h2 class="text-h4 mb-4">Data Display</h2>
      <v-row>
        <v-col cols="12">
          <v-table>
            <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Jack Petrovic</td>
              <td>jack.petrovic@outlook.com</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>Austin Ryder</td>
              <td>austinryder0000@gmail.com</td>
              <td>Active</td>
            </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>
<script setup lang="ts">
</script>