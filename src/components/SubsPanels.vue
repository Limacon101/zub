<script setup lang="ts">
import {NButton, NCard, NFlex, NForm, NFormItemRow, NInput, NTabPane, NTabs, NTooltip} from 'naive-ui'
import {ref} from 'vue'
import UploadAndMint from "@/components/NewZub.vue";
import mintExistingZub from "@/zora/mintExistingZub";
import ExistingZubs from "@/components/ExistingZubs.vue";

// Fields used for the 'Existing Mint' option
const metadataCid = ref('')
const coinName = ref('');
const existingMintIsLoading = ref(false)
const existingMintFormError = ref('')

const onMint = (zub: any) => {
  console.log("minting:", zub);
}

const clearError = () => {
  existingMintFormError.value = ''
}

const onMintExisting = async () => {
  console.log("Minting existing with CID:", metadataCid.value);

  existingMintIsLoading.value = true
  existingMintFormError.value = ''

  await new Promise(resolve => setTimeout(resolve, 1000));

  try {
    const result = await mintExistingZub({
      name: coinName,
      symbol: 'ZORAENG',
      uri: `ipfs://${metadataCid.value}`
    })

    console.log("Mint successful:", result);
    return result;
  } catch (error) {
    console.error("Mint failed:", error);
    existingMintFormError.value = error instanceof Error ? error.message : 'An unexpected error occurred during minting'
    throw error;
  } finally {
    existingMintIsLoading.value = false
  }
}
</script>

<template>
  <n-flex vertical size="medium">
    <div>
      <n-card title="Existing Zubs">
        <existing-zubs/>
      </n-card>

    </div>
    <div>
      <n-card title="Submit New Zubs">
        <n-tabs default-value="mintExisting" size="large" justify-content="space-evenly">
          <n-tab-pane name="mintExisting" tab="Mint Existing">
            <n-form @submit.prevent="onMintExisting">
              <n-form-item-row label="Metadata CID" :feedback="existingMintFormError"
                               :validation-status="existingMintFormError ? 'error' : undefined">
                <n-input
                    v-model:value="metadataCid"
                    placeholder="Enter metadata CID"
                    :disabled="existingMintIsLoading"
                    @focus="clearError"
                    required
                />
                <n-tooltip trigger="hover">
                  <template #trigger>
                    <n-button round type="info"> i</n-button>
                  </template>
                  For the Zorathon, this can be run using the project's npm scripts with your own Zora keys!
                </n-tooltip>
              </n-form-item-row>
              <n-form-item-row label="Coin Name">
                <n-input
                    v-model:value="coinName"
                    placeholder="Enter coin name"
                    :disabled="existingMintIsLoading"
                    @focus="clearError"
                    required
                />
              </n-form-item-row>

              <n-button
                  type="primary"
                  attr-type="submit"
                  block
                  secondary
                  strong
                  round
                  :disabled="existingMintIsLoading"
                  :loading="existingMintIsLoading"
              >
                <span v-if="!existingMintIsLoading">Mint</span>
              </n-button>
            </n-form>
          </n-tab-pane>
          <n-tab-pane name="uploadAndMint" tab="Upload and Mint">
            <upload-and-mint @mint="onMint"/>
          </n-tab-pane>
        </n-tabs>

      </n-card>
    </div>
  </n-flex>
</template>
