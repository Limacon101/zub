<script setup lang="ts">
import {NButton, NForm, NFormItem, NInput, NRadio, NRadioGroup, NSpace} from 'naive-ui'
import {ref} from 'vue'
import {NewZub, SupportedLanguage} from "@/models/newZub";

const lang = ref('English');
const inputValue = ref('');
const model = ref<NewZub>({
  inputValue: '',
  lang: SupportedLanguage.EN_GB
})

const emit = defineEmits<{
  mint: [zub: NewZub]
}>()
const onMint = () => {
  const newZub = {
    inputValue: inputValue.value,
    lang: lang.value
  } as NewZub;
  emit('mint', newZub);
}
</script>

<template>
  <n-space vertical>
    <n-form @submit.prevent="onMint()">
      <div>Language (more coming soon):</div>
      <n-radio-group v-model:value="lang">
        <n-space>
          <n-radio label="English" :value="SupportedLanguage.EN_GB" />
          <n-radio label="Korean" :value="SupportedLanguage.KO_KR" />
        </n-space>
      </n-radio-group>
      <br />
      <n-form-item label="Subtitle or translation:" path="input" :style="{ 'margin-top': '12px'}">
        <n-input
            v-model:value="inputValue"
            type="textarea"
            placeholder="Zubs value"
        />
      </n-form-item>
      <n-button type="primary" attr-type="submit" block secondary strong round>
        Mint!
      </n-button>
    </n-form>
  </n-space>
</template>
