export function useUtiliy() {
  async function copyPhone(toastOptions = {}) {
    try {
      await navigator.clipboard.writeText('949-806-0123');
      this.$_andariego_toast('Phone number copied.', toastOptions);
    } catch (err) {
      this.$_andariego_toast('Error copying phone number.', { type: 'error' });
    }
  }

  function mongoDateToString(data) {
    data.forEach((d) => {
      d.date = new Date(d.date).toLocaleString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    });
  }

  function prettyContent(content = []) {
    const res = content.join(', ');
    const index = res.lastIndexOf(',');
    return res.slice(0, index + 1) + ' y' + res.slice(index + 1);
  }

  return {
    copyPhone,
    mongoDateToString,
    prettyContent,
  };
}
