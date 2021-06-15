import {
    expect
} from 'chai';
import sinon from 'sinon';

import PostsController from '../../../src/controllers/posts';
import Posts from '../../../src/models/posts';

describe('Post Controller - Test', function () {
    const posts = [{
        id: "56cb91bdc3464f14678934ca",
        title: "Título do post",
        content: "Conteúdo do post",
        author: "56cb91bdc3464f14678934ca",
        publishDate: new Date(Date.now())
    }]

    const defaultRequest = {
        params: {}
    }

    describe.skip(' Exercicio - Ciclo Red ', function () {
        describe(' lista Posts ', function () {
            it('precisa retornar um array com todos os posts ', function () {
                const response = {
                    send: sinon.spy(),
                    status: sinon.stub()
                }

                // stub() substitui a execução da função para vc deinir como vai ser chamado e como vai retornar
                response.status.withArgs(400).returns(response);
                // define que a função status será chamada com o arg 400 e vai retornar o objeto response

                Posts.find = sinon.stub();
                Posts.find.withArgs({}).resolves(posts);

                const controller = new PostsController(new Posts());
                const spy = sinon.spy(controller.findAll); // vai ver se o método foi chamado, quais argumentos passados, qtas vezes foi chamado...
                const defaultPosts = controller.findAll({}, response);

                expect(spy.returned()).defined; // não temos o básico do funcionamento
            });
        });
    });

    describe(' Exercicio - Ciclo Green ', function () {
        describe(' lista posts ', function () {
            it('precisa retornar uma lista com todos os posts (status 200)', async function () {
                const response = {
                    send: sinon.spy()
                }

                Posts.find = sinon.stub();
                Posts.find.withArgs({}).resolves(posts);

                const controller = new PostsController(new Posts());
                await controller.findAll(defaultRequest, response);

                sinon.assert.calledWith(response.send, posts);
            });
        });
    });

    describe.skip(' Exercicio - Ciclo Refactor ', function () {

    });
});