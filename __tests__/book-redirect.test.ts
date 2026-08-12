import nextConfig from '@/next.config'

describe('/book redirect', () => {
  it('redirects /book to the home assessment', async () => {
    const redirects = nextConfig.redirects ? await nextConfig.redirects() : []
    expect(redirects).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          source: '/book',
          destination: '/#assessment',
          permanent: true,
        }),
      ])
    )
  })
})
