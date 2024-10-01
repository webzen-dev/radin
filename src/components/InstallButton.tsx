import { useEffect, useState } from 'react';

const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallPromptVisible, setInstallPromptVisible] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault(); 
      setDeferredPrompt(event); 
      setInstallPromptVisible(true); 
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); 
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response to the install prompt: ${outcome}`);
      setDeferredPrompt(null); 
      setInstallPromptVisible(false); 
    }
  };

  return (
    isInstallPromptVisible && (
      <button onClick={handleInstallClick}>
        نصب برنامه
      </button>
    )
  );
};

export default InstallButton;
