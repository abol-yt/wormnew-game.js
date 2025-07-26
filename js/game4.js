// Ø¥Ø¹Ø§Ø¯Ø© ØªÙˆØ¬ÙŠÙ‡ Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ† Ø¥Ù„Ù‰ Ø§Ù„Ø¥Ø¶Ø§ÙØ© Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø©
window.addEventListener('DOMContentLoaded', function() {
  // Ø¥Ù†Ø´Ø§Ø¡ Ø§Ù„Ø¹Ù†Ø§ØµØ±
  const modalContainer = document.createElement('div');
  modalContainer.className = 'wup-update-modal';
  modalContainer.style.position = 'fixed';
  modalContainer.style.top = '0';
  modalContainer.style.left = '0';
  modalContainer.style.width = '100%';
  modalContainer.style.height = '100%';
  modalContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  modalContainer.style.zIndex = '9999';
  modalContainer.style.display = 'flex';
  modalContainer.style.alignItems = 'center';
  modalContainer.style.justifyContent = 'center';
  
  const modalContent = document.createElement('div');
  modalContent.className = 'wup-modal-content';
  modalContent.style.width = '480px';
  modalContent.style.maxWidth = '90%';
  modalContent.style.borderRadius = '8px';
  modalContent.style.overflow = 'hidden';
  modalContent.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
  
  // Ø¥Ø¶Ø§ÙØ© Ø§Ù„Ù‡ÙŠØ¯Ø±
  const modalHeader = document.createElement('div');
  modalHeader.className = 'wup-modal-header';
  modalHeader.style.backgroundColor = '#ff8a18';
  modalHeader.style.background = 'linear-gradient(145deg, rgb(255, 141, 0), rgb(255, 102, 0))';
  modalHeader.style.padding = '0 15px';
  modalHeader.style.height = '36px';
  modalHeader.style.lineHeight = '36px';
  modalHeader.style.borderRadius = '8px 8px 0 0';
  modalHeader.style.position = 'relative';
  modalHeader.style.textAlign = 'center';
  
  const modalTitle = document.createElement('h2');
  modalTitle.className = 'wup-modal-title';
  modalTitle.textContent = 'ØªØ­Ø¯ÙŠØ« Ù‡Ø§Ù…';
  modalTitle.style.margin = '0';
  modalTitle.style.fontSize = '18px';
  modalTitle.style.fontWeight = 'bold';
  modalTitle.style.color = 'white';
  
  modalHeader.appendChild(modalTitle);
  
  // Ø¥Ø¶Ø§ÙØ© Ø§Ù„Ù…Ø­ØªÙˆÙ‰
  const modalBody = document.createElement('div');
  modalBody.className = 'wup-modal-body';
  modalBody.style.padding = '20px';
  modalBody.style.backgroundColor = '#1e2339';
  modalBody.style.color = '#fff';
  modalBody.style.borderRadius = '0 0 8px 8px';
  modalBody.style.textAlign = 'center';
  
  // Ø¥Ø¶Ø§ÙØ© Ù…Ø­ØªÙˆÙ‰ Ø§Ù„Ø±Ø³Ø§Ù„Ø©
  const messageContainer = document.createElement('div');
  messageContainer.style.marginBottom = '20px';
  
  const messageTitle = document.createElement('h3');
  messageTitle.textContent = 'ØªÙ… ØªØ·ÙˆÙŠØ± Ø¥Ø¶Ø§ÙØ© Worm UP !';
  messageTitle.style.color = '#ffbb00';
  messageTitle.style.margin = '10px 0';
  messageTitle.style.fontSize = '22px';
  
  const messageText = document.createElement('p');
  messageText.innerHTML = 'Ù†Ø­Ù† Ø³Ø¹Ø¯Ø§Ø¡ Ù„Ø¥Ø®Ø¨Ø§Ø±Ùƒ Ø£Ù†Ù‡ ØªÙ… ØªØ·ÙˆÙŠØ± Ø¥Ø¶Ø§ÙØ© Worm UP Ø¨Ù…ÙŠØ²Ø§Øª Ø¬Ø¯ÙŠØ¯Ø© ÙˆÙ…Ø­Ø³Ù†Ø©! ' +
                         'Ø§Ù„Ø¥Ø¶Ø§ÙØ© Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø© Ù…ØªÙˆÙØ±Ø© Ø§Ù„Ø¢Ù† ÙÙŠ Ù…ØªØ¬Ø± Ø¬ÙˆØ¬Ù„ ÙƒØ±ÙˆÙ….';
  messageText.style.fontSize = '16px';
  messageText.style.lineHeight = '1.6';
  messageText.style.margin = '15px 0';
  
  messageContainer.appendChild(messageTitle);
  messageContainer.appendChild(messageText);
  
  // Ø¥Ø¶Ø§ÙØ© ØµÙˆØ±Ø© Ø§Ù„Ø¨Ø±ÙŠÙ…ÙŠÙˆÙ…
  const premiumImage = document.createElement('img');
  premiumImage.src = '';
  premiumImage.alt = 'Premium Features';
  premiumImage.style.maxWidth = '280px';
  premiumImage.style.height = 'auto';
  premiumImage.style.borderRadius = '4px';
  premiumImage.style.margin = '10px auto 20px';
  premiumImage.style.display = 'block';
  });
  
  // Ø²Ø± Discord
  const discordButton = document.createElement('button');
  discordButton.style.display = 'inline-block';
  discordButton.style.backgroundColor = '#5865F2';
  discordButton.style.color = 'white';
  discordButton.style.padding = '12px 24px';
  discordButton.style.margin = '10px auto';
  discordButton.style.borderRadius = '6px';
  discordButton.style.border = 'none';
  discordButton.style.fontWeight = 'bold';
  discordButton.style.fontSize = '16px';
  discordButton.style.transition = 'background-color 0.3s';
  discordButton.style.cursor = 'pointer';
  discordButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
  
  // Ø¥Ø¶Ø§ÙØ© Ø£ÙŠÙ‚ÙˆÙ†Ø© Ø¯ÙŠØ³ÙƒÙˆØ±Ø¯
  const discordIcon = document.createElement('span');
  discordIcon.innerHTML = '<svg style="width: 20px; height: 20px; margin-right: 8px; display: inline-block; vertical-align: middle;" viewBox="0 0 24 24" fill="white"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>';
  
  const discordText = document.createTextNode('Ø§Ù†Ø¶Ù… Ù„Ù…Ø¬ØªÙ…Ø¹Ù†Ø§ Ø¹Ù„Ù‰ Discord');
  discordButton.appendChild(discordIcon);
  discordButton.appendChild(discordText);
  
  // Ø¥Ø¶Ø§ÙØ© Ù…Ø¹Ø§Ù„Ø¬ Ø§Ù„Ø­Ø¯Ø« Ù„Ø²Ø± Discord
  discordButton.addEventListener('click', function(e) {
    e.stopPropagation();
    window.open('https://discord.gg/zNJkB8EeUF', '_blank');
  });
  
  // Ø¥Ø¶Ø§ÙØ© Ø§Ù„Ù†Øµ Ø§Ù„ØªØ­Ø°ÙŠØ±ÙŠ
  const warningText = document.createElement('p');
  warningText.textContent = 'Ù…Ù„Ø§Ø­Ø¸Ø©: Ù‡Ø°Ù‡ Ø§Ù„Ù†Ø³Ø®Ø© Ù…Ù† Ø§Ù„Ù„Ø¹Ø¨Ø© Ù„Ù… ØªØ¹Ø¯ ØªØªÙ„Ù‚Ù‰ ØªØ­Ø¯ÙŠØ«Ø§Øª. ÙŠØ±Ø¬Ù‰ ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ø¥Ø¶Ø§ÙØ© Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø© Ù„Ù„Ø§Ø³ØªÙ…ØªØ§Ø¹ Ø¨Ø£Ø­Ø¯Ø« Ø§Ù„Ù…ÙŠØ²Ø§Øª.';
  warningText.style.fontSize = '14px';
  warningText.style.color = '#ffbb00';
  warningText.style.marginTop = '20px';
  
  // Ø¥Ø¶Ø§ÙØ© Ø§Ù„Ø¹Ù†Ø§ØµØ± Ø¥Ù„Ù‰ body
  modalBody.appendChild(messageContainer);
  modalBody.appendChild(premiumImage);
  modalBody.appendChild(storeButton);
  modalBody.appendChild(document.createElement('br'));
  modalBody.appendChild(discordButton);
  modalBody.appendChild(warningText);
  
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContainer.appendChild(modalContent);
  document.body.appendChild(modalContainer);
  
  // ØªØ¹Ø·ÙŠÙ„ Ù…Ø¹Ø¸Ù… Ø§Ù„Ø£Ø­Ø¯Ø§Ø« ÙÙŠ Ø§Ù„ØµÙØ­Ø© Ø§Ù„Ø£ØµÙ„ÙŠØ© ÙˆÙ„ÙƒÙ† Ù„ÙŠØ³ Ø§Ù„Ø£Ø²Ø±Ø§Ø± Ø§Ù„ØªÙŠ Ø£Ù†Ø´Ø£Ù†Ø§Ù‡Ø§
  const allowedElements = [storeButton, discordButton];
  
  document.addEventListener('click', function(e) {
    // Ø§Ù„Ø³Ù…Ø§Ø­ Ø¨Ø§Ù„Ù†Ù‚Ø± Ø¹Ù„Ù‰ Ø§Ù„Ø£Ø²Ø±Ø§Ø± Ø§Ù„Ù…Ø­Ø¯Ø¯Ø© ÙÙ‚Ø·
    if (!allowedElements.includes(e.target) && !allowedElements.some(el => el.contains(e.target))) {
      e.stopPropagation();
      e.preventDefault();
    }
  }, true);
  
  document.addEventListener('keydown', function(e) {
    e.stopPropagation();
    e.preventDefault();
  }, true);
  
  // Ù…Ù†Ø¹ Ø¥ØºÙ„Ø§Ù‚ Ø§Ù„Ù†Ø§ÙØ°Ø©
  modalContainer.addEventListener('click', function(e) {
    if (e.target === modalContainer) {
      e.stopPropagation();
      return false;
    }
  });

  // Ø¬Ø¹Ù„ Ø§Ù„Ù†Ø§ÙØ°Ø© ØªØ¸Ù‡Ø± Ø¯Ø§Ø¦Ù…Ø§Ù‹
  setInterval(function() {
    if (!document.body.contains(modalContainer)) {
      document.body.appendChild(modalContainer);
    }
  }, 100);
  
  // Ø¥Ø¹Ø§Ø¯Ø© ØªØ¹ÙŠÙŠÙ† Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø£Ø­Ø¯Ø§Ø« ÙˆØ§Ù„ÙˆØ¸Ø§Ø¦Ù Ø§Ù„Ø£Ø®Ø±Ù‰
  window.anApp = null;
  window.setApp = function() { return null; };
});
