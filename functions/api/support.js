export async function onRequestPost({ request }) {
  try {
    const formData = await request.formData();
    
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    
    // Ensure FormSubmit doesn't render an interactive captcha that breaks our AJAX flow
    data['_captcha'] = 'false';
    
    const reqHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    
    if (request.headers.get('Origin')) reqHeaders['Origin'] = request.headers.get('Origin');
    if (request.headers.get('Referer')) reqHeaders['Referer'] = request.headers.get('Referer');
    if (request.headers.get('User-Agent')) reqHeaders['User-Agent'] = request.headers.get('User-Agent');
    
    // Forward the POST data to FormSubmit targeting your email 
    // This runs server-side on Cloudflare, hiding the email address from users
    const response = await fetch('https://formsubmit.co/ajax/sawalicassie@gmail.com', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: reqHeaders
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
