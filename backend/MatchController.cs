using Microsoft.AspNetCore.Mvc;
using JobSearchMatch.Backend.Models;
using JobSearchMatch.Backend.Services;

namespace JobSearchMatch.Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MatchController : ControllerBase
{
    private readonly ISkillMatcher _skillMatcher;

    public MatchController(ISkillMatcher skillMatcher)
    {
        _skillMatcher = skillMatcher;
    }

    /// <summary>
    /// Accepts resume text and job description, returns match results.
    /// </summary>
    [HttpPost]
    public async Task<ActionResult<MatchResponse>> Post([FromBody] MatchRequest request, CancellationToken cancellationToken)
    {
        if (request is null)
        {
            return BadRequest();
        }

        var result = await _skillMatcher.MatchAsync(request, cancellationToken);
        return Ok(result);
    }
}
