const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('modaloverlay')

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.CDATA_SECTION_NODE.modalTarget)
    openModalButtons(modal)
  })
})

modaloverlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach((modal) => {
    closeModal(modal)
  })
})

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  modaloverlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  modaloverlay.classList.remove('active')
}
