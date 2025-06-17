<template>
  <div class="preview-modal" :class="{ 'is-visible': isVisible }" @mouseover="isHovered = true"
    @mouseleave="isHovered = false">
    <div class="buttons-container" v-if="isHovered">
      <a :href="gitUrl" target="_blank" rel="noopener noreferrer">
        <button v-if="showGit" class="btn-icon btn-action" @click.stop>
          <Icon class="icon-action" name="lucide:github" />
        </button>
      </a>
      <a :href="externalUrl" target="_blank" rel="noopener noreferrer">
        <button v-if="showExternalLink" class="btn-icon btn-action" @click.stop>
          <Icon class="icon-action" name="lucide:external-link" />
        </button>
      </a>
    </div>
    <img :src="imageSrc" alt="Project preview" class="preview-image" :class="{ 'blurred': isHovered }" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  isVisible: {
    type: Boolean,
    default: false
  },
  gitUrl: {
    type: String,
    default: '',
    required: false
  },
  externalUrl: {
    type: String,
    default: '',
    required: false
  }
});

const isHovered = ref(false);
const showGit = ref(!!props.gitUrl);
const showExternalLink = ref(!!props.externalUrl);

const handleOpenURL = (url: string | null = null) => {
  if (url) {
    window.open(url, '_blank');
  }
};
</script>

<style scoped>
.preview-modal {
  position: absolute;
  top: -20px;
  right: 0;
  width: min(40vw, 600px);
  max-height: 60vh;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.1);
  z-index: 100;
  border-radius: 1.6rem;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  background: white;
  transform: translateY(20px);
}

.preview-modal.is-visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(-100%);
}

.preview-image {
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
  transition: all 0.5s ease;
}

.preview-image.blurred {
  filter: blur(4px);
  opacity: 0.7;
}

.buttons-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 1.5rem;
  z-index: 2;
}

.btn-action {
  background: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn-action:hover {
  transform: scale(1.1);
  background: white;
}

.icon-action {
  font-size: 2rem;
  color: #000;
}

.preview-modal.is-visible .preview-image {
  transform: scale(1.02);
}

@media (max-width: 768px) {
  .preview-modal {
    width: 90vw;
    right: 0;
    left: auto;
  }

  .buttons-container {
    gap: 1rem;
  }

  .btn-action {
    padding: 0.8rem;
  }

  .icon-action {
    font-size: 1.8rem;
  }
}
</style>