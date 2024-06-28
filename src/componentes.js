import React from 'react';

function FeedbackForm() {
    return (
        <div className="backdrop-red" style={{ backgroundColor: '#807e7e' }}>
            <h1 className="text-2xl font-bold text-center text-white mb-4">De a sua sugestão</h1>
            <p className="text-center text-white mb-6">Lorem ipsum dolor sit amet,</p>

            <section className="flex justify-center items-center p-6 rounded-lg max-w-2xl mx-auto">
                <div>
                    <p className="text-center text-white mb-6">Aqui você pode enviar uma mensagem ou um comentário. Por favor, preencha seu email e a mensagem desejada.</p>
                </div>
                <div className="w-full max-w-md">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email*</label>
                        <input type="email" id="email" name="email" required className="block w-full p-2 border border-gray-300 rounded mb-4" />

                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                        <textarea id="message" name="message" rows="4" required className="block w-full p-2 border border-gray-300 rounded mb-4"></textarea>

                        <div className="text-right">
                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">Enviar</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );

    
}

export default FeedbackForm;
