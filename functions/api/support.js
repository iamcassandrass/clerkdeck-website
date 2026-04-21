export async function onRequestPost({ request }) {
  try {
    const formData = await request.formData();
    
    // Ensure FormSubmit doesn't render an interactive captcha that breaks our AJAX flow
    formData.append('_captcha', 'false');
    
    // Forward the POST data to FormSubmit targeting your email 
    // This runs server-side on Cloudflare, hiding the email address from users
    const response = await fetch('https://formsubmit.co/ajax/sawalicassie@gmail.com', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } else {
      const data = await response.text();
      return new Response(JSON.stringify({ success: false, error: data }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
