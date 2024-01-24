<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $credentials = request(['email', 'password']);
        $attempt = auth()->attempt($credentials);
        if ($attempt) {
            $user = User::where('email', $credentials['email'])->first();

            $token = $user->createToken('coding-task')->plainTextToken;

            return response()->json([
                'access_token' => $token,
                'token_type' => 'bearer',
                'user' => $user
            ]);
        }


        return response()->json(['error' => 'Unauthorized, the provided credentials are incorrect'], 401);
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->user()->tokens()->delete();
        return response()->json(['message' => 'Successfully logged out']);
    }

    public function register(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
            'name' => 'required',
        ]);
        $credentials = request(['email', 'password']);

        $user = new User();
        $user->name = $request->name;
        $user->email = $credentials['email'];
        $user->password = Hash::make($credentials['password']);
        $user->save();

        $attempt = auth()->attempt($credentials);
        if ($attempt) {
            $user = User::where('email', $credentials['email'])->first();

            $token = $user->createToken('coding-task')->plainTextToken;

            return response()->json([
                'access_token' => $token,
                'token_type' => 'bearer',
                'user' => $user
            ]);
        }


        return response()->json(['error' => 'Unauthorized, the provided credentials are incorrect'], 401);
    }
}
